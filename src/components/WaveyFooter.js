import React, { useEffect, useRef } from 'react';
import styles from '../styles/WaveyFooter.module.css';

const WaveyFooter = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    const vertexShaderSource = `
      attribute vec4 position;
      void main() {
        gl_Position = vec4(position);
      }
    `;

    const fragmentShaderSource = `
      #ifdef GL_FRAGMENT_PRECISION_HIGH
      precision highp float;
      #else
      precision mediump float;
      #endif

      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;

      vec2 random2(vec2 st){
        st = vec2(dot(st, vec2(127.1, 311.7)),
                   dot(st, vec2(269.5, 183.3)));
        return -1.0 + 2.0 * fract(sin(st) * 43758.5453123);
      }

      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(dot(random2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
                       dot(random2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
                   mix(dot(random2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
                       dot(random2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution;
        float waveOffset = 0.3;
        float waveCenter = 1.0;
        float waveFocus = 0.25;
        float waveSpeed = 2.0;
        float wMin = waveCenter - waveFocus;
        float wMax = waveCenter + waveFocus;
        uv.x *= u_resolution.x / u_resolution.y;
        uv.x += 1787.74328;
        uv.y *= 2.0;
        float rn = noise(vec2(uv.x, u_time / waveSpeed));
        float ry = uv.y - rn;
        float r = smoothstep(wMin, wMax, ry);
        float bn = noise(vec2(uv.x, u_time / waveSpeed - waveOffset));
        float by = uv.y - bn;
        float b = smoothstep(wMin, wMax, by);
        float gn = noise(vec2(uv.x, u_time / waveSpeed + waveOffset));
        float gy = uv.y - gn;
        float g = smoothstep(wMin, wMax, gy);
        gl_FragColor = vec4(r, b, g, 1.0);
      }
    `;

    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [
      -1, -1,
       1, -1,
      -1,  1,
       1,  1,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const uResolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const uTimeLocation = gl.getUniformLocation(program, 'u_time');
    const uMouseLocation = gl.getUniformLocation(program, 'u_mouse');

    const uniforms = {
      u_time: 0,
      u_resolution: [canvas.width, canvas.height],
      u_mouse: [0, 0],
    };

    const render = (time) => {
      uniforms.u_time = time * 0.001;
      gl.uniform2fv(uResolutionLocation, uniforms.u_resolution);
      gl.uniform1f(uTimeLocation, uniforms.u_time);
      gl.uniform2fv(uMouseLocation, uniforms.u_mouse);
      
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  }, []);

  return (
    <div className={styles.container}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
};

export default WaveyFooter;
