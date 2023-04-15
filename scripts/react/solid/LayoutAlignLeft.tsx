import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLayoutAlignLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M20.811 4.278a.883.883 0 0 0-.481.374c-.066.12-.071.556-.08 7.262-.008 5.12.002 7.181.033 7.299a.804.804 0 0 0 .515.506.745.745 0 0 0 .921-.517c.028-.104.039-2.455.031-7.288-.01-7.108-.01-7.135-.092-7.273a.807.807 0 0 0-.847-.363M5.503 7.042c-1.017.173-1.947.934-2.301 1.883-.193.517-.201.631-.201 3.067-.001 2.5.007 2.604.233 3.159a3.044 3.044 0 0 0 1.617 1.616c.6.244.392.237 6.049.224l5.16-.011.28-.095c1.23-.415 1.996-1.345 2.139-2.595.052-.455.052-4.125 0-4.58-.144-1.261-.945-2.222-2.165-2.598l-.294-.091-5.16-.006c-2.838-.004-5.249.008-5.357.027'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutAlignLeft);
export default ForwardRef;
