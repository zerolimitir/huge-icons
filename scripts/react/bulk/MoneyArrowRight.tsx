import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyArrowRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.58 7.095A.976.976 0 0 0 5.002 8c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m5.858 2.98a1.984 1.984 0 0 0-.872.542c-.78.813-.759 2.04.05 2.816.814.781 2.04.76 2.817-.049A1.91 1.91 0 0 0 14 12c0-.895-.597-1.678-1.477-1.936a2.275 2.275 0 0 0-1.085.011m8.785 5.174c-.445.093-.699.593-.521 1.022.034.083.241.33.469.559l.408.41-2.36.001c-2.208.001-2.369.005-2.519.075a.734.734 0 0 0-.398.413c-.154.368.018.78.398.955.15.07.311.074 2.519.075l2.359.001-.385.39c-.471.477-.527.578-.506.911.025.387.239.621.625.682.312.05.412-.017 1.241-.838.426-.421.827-.842.893-.936.38-.545.38-1.391 0-1.938-.164-.237-1.399-1.507-1.601-1.647a.774.774 0 0 0-.622-.135'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyArrowRight);
export default ForwardRef;
