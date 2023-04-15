import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSignalCellularBad = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.7 15.316c-.38.175-.551.586-.399.955.04.095.347.434.85.939l.787.789-.806.811c-.573.575-.814.845-.832.93a2.74 2.74 0 0 1-.042.169c-.024.081.096.433.189.551.11.139.368.258.564.259.289.002.424-.097 1.219-.89l.77-.768.79.788c.504.503.844.81.939.85a.741.741 0 0 0 1.02-.594c.039-.34-.018-.424-.883-1.295l-.804-.811.787-.789c.503-.505.81-.844.85-.939a.741.741 0 0 0-.594-1.02c-.34-.039-.424.018-1.295.883l-.811.804-.789-.787c-.505-.503-.844-.81-.939-.85a.668.668 0 0 0-.571.015'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignalCellularBad);
export default ForwardRef;
