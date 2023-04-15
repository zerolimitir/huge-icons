import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPyramid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.36 1.82c-.7.157-1.356.556-1.748 1.064-.131.171-2.412 4.05-2.412 4.103C7.2 6.994 9.36 7 12 7c2.64 0 4.8-.006 4.8-.013 0-.063-2.276-3.92-2.425-4.109-.358-.456-.972-.858-1.555-1.018-.338-.092-1.13-.114-1.46-.04m-6.35 8.931L3.719 12.98l4.141.01c2.277.006 6.003.006 8.28 0l4.14-.01-1.29-2.229-1.29-2.229H12l-5.7-.001-1.29 2.23M2.533 15.03c-.433.768-.562 1.23-.52 1.863.03.457.109.757.307 1.167.373.774 1.054 1.331 1.941 1.588l.319.092h14.84l.319-.092a3.013 3.013 0 0 0 1.118-.569 2.985 2.985 0 0 0 .977-3.299 5.986 5.986 0 0 0-.367-.75l-.287-.51H2.82l-.287.51'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPyramid);
export default ForwardRef;
