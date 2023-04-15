import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTransfusion = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.442 2.681c-.41.148-.699.396-1.58 1.355-2.776 3.026-4.075 5.829-3.825 8.254.3 2.908 2.26 5.143 4.922 5.613.417.073 1.321.114 1.545.07l.165-.033-.159-.395a7.328 7.328 0 0 1-.469-3.3c.185-1.831 1.056-3.756 2.649-5.854.354-.467 1.263-1.543 1.424-1.687l.085-.075-.266-.385c-.775-1.124-2.515-3.08-3.009-3.384-.434-.267-1.035-.34-1.482-.179M18.74 15.3c-.253.089-.4.283-.523.687-.368 1.212-1.114 1.935-2.344 2.272-.273.074-.458.22-.558.439a.754.754 0 0 0 .468 1.023c.19.063.463.026.906-.122a4.286 4.286 0 0 0 1.751-1.079 4.807 4.807 0 0 0 1.218-2.054c.121-.42.125-.552.026-.766a.696.696 0 0 0-.44-.399c-.211-.074-.296-.074-.504-.001'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTransfusion);
export default ForwardRef;
