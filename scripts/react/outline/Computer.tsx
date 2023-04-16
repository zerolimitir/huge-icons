import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgComputer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M4.74 1.267a3.84 3.84 0 0 0-2.334 1.03c-.526.494-.95 1.287-1.093 2.045-.077.407-.077 10.909 0 11.316a3.774 3.774 0 0 0 2.412 2.861c.588.218.516.214 4.145.23l3.37.016v2.47l-1.233.012-1.233.013-.162.107a.7.7 0 0 0-.345.64c0 .196.019.263.116.401a.939.939 0 0 0 .277.248c.158.083.205.084 3.218.095 2.142.008 3.122-.002 3.273-.033a.734.734 0 0 0 .371-1.236c-.222-.222-.356-.242-1.64-.242H12.76v-2.475l3.37-.016c2.959-.013 3.404-.023 3.645-.081 1.53-.367 2.627-1.502 2.912-3.01.077-.407.077-10.909 0-11.316-.285-1.509-1.374-2.635-2.912-3.011-.252-.062-.884-.068-7.575-.073-4.015-.003-7.372.001-7.46.009m14.838 1.554c.13.034.345.119.479.189.314.165.768.619.933.933.264.503.25.169.25 6.057 0 5.888.014 5.554-.25 6.057-.165.314-.619.768-.933.933-.51.267.039.25-8.057.25s-7.547.017-8.057-.25c-.314-.165-.768-.619-.933-.933-.264-.503-.25-.169-.25-6.057 0-5.888-.014-5.554.25-6.057.165-.315.619-.768.934-.934.497-.26-.045-.243 8.038-.246 6.487-.003 7.389.004 7.596.058m-8.763 11.457c-.484.115-.717.726-.432 1.13.222.314.293.33 1.486.345 1.253.015 1.427-.009 1.65-.232.399-.399.212-1.098-.33-1.235-.206-.051-2.164-.058-2.374-.008'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgComputer);
export default ForwardRef;