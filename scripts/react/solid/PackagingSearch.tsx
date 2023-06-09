import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackagingSearch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7.44 2.027c-.647.074-1.49.437-2.04.88-.283.228-.523.502-1.433 1.633a80.828 80.828 0 0 0-1.212 1.53l-.119.17h18.728l-.119-.17a80.828 80.828 0 0 0-1.212-1.53c-.91-1.131-1.15-1.405-1.433-1.633a4.855 4.855 0 0 0-1.56-.793l-.34-.092-4.56-.005c-2.508-.003-4.623.002-4.7.01M2.021 8.01c-.014.138-.02 2.59-.012 5.45l.013 5.2.11.378c.441 1.507 1.585 2.572 3.094 2.879.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.403 3.098-2.905l.108-.392.012-5.18c.007-2.849.001-5.292-.013-5.43l-.025-.25H2.046l-.025.25m10.799 2.338a3.812 3.812 0 0 1 2.199 1.429c.232.31.5.883.609 1.301.082.314.099.478.1.922.001.673-.107 1.132-.398 1.697l-.196.379.475.472c.586.582.644.671.644.972a.722.722 0 0 1-.961.704c-.158-.053-.287-.158-.709-.581l-.515-.516-.154.097c-.558.352-1.464.574-2.13.521-1.368-.107-2.493-.848-3.114-2.051a3.805 3.805 0 0 1-.285-2.674c.079-.31.371-.929.563-1.193a3.815 3.815 0 0 1 2.632-1.547c.351-.04.875-.011 1.24.068m-1.28 1.45A2.255 2.255 0 0 0 9.76 14c0 .615.219 1.139.66 1.58a2.205 2.205 0 0 0 3.16 0c1.164-1.164.739-3.098-.809-3.686-.298-.113-.927-.162-1.231-.096'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackagingSearch);
export default ForwardRef;
