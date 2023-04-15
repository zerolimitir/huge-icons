import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFigma = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12 5.995v3l-1.75.015c-1.977.016-1.948.012-2.61.337-.32.157-.437.243-.743.55-.307.306-.393.423-.55.743-.259.527-.325.803-.325 1.36s.066.833.325 1.36c.157.32.243.437.55.743.306.307.423.393.743.55.66.324.633.32 2.61.337l1.75.015V9h1.642c1.79 0 1.978-.017 2.508-.233a3.08 3.08 0 0 0 1.617-1.617 2.975 2.975 0 0 0-1.471-3.838c-.6-.289-.561-.284-2.526-.302L12 2.995v3'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFigma);
export default ForwardRef;
