import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCardArrowRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2 9v2h20V7H2v2m3.58 7.095a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m14.643.154c-.445.093-.699.593-.521 1.022.034.083.241.33.469.559l.408.41-2.36.001c-2.208.001-2.369.005-2.519.075a.734.734 0 0 0-.398.413c-.154.368.018.78.398.955.15.07.311.074 2.519.075l2.359.001-.385.39c-.471.477-.527.578-.506.911.025.387.239.621.625.682.312.05.412-.017 1.241-.838.426-.421.827-.842.893-.936.38-.545.38-1.391 0-1.938-.164-.237-1.399-1.507-1.601-1.647a.774.774 0 0 0-.622-.135'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCardArrowRight);
export default ForwardRef;
