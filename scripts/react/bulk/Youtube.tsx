import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgYoutube = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.726 8.644c-.297.09-.572.351-.684.649-.028.074-.042.984-.042 2.711 0 2.811-.007 2.715.218 3.01.056.073.196.185.312.249.172.095.258.116.477.116l.267.001 2.501-1.248c1.644-.821 2.556-1.298 2.659-1.392a.995.995 0 0 0 0-1.48c-.104-.094-1.009-.568-2.646-1.384-2.188-1.092-2.514-1.243-2.708-1.257a1.188 1.188 0 0 0-.354.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgYoutube);
export default ForwardRef;
