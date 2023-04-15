import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFolderFile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.62 2.041c-.701.146-1.252.625-1.513 1.315-.081.215-.085.302-.098 2.194-.007 1.083-.005 1.97.005 1.97s.123-.052.252-.116c.707-.351 1.13-.408 2.874-.392 1.33.013 1.369.016 1.76.121.614.165 1.015.39 2.08 1.168 1.075.786 1.524 1.036 2.161 1.204.387.102.447.107 1.979.134 1.774.032 1.879.047 2.551.362l.332.155-.012-3.288c-.011-3.249-.013-3.291-.097-3.512a2.112 2.112 0 0 0-1.244-1.248l-.23-.088-5.32-.006c-2.926-.003-5.392.009-5.48.027'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderFile);
export default ForwardRef;
