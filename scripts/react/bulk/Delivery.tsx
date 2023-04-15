import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDelivery = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14 12.998V19h6.277l.291-.093a2.037 2.037 0 0 0 1.324-1.257c.086-.228.087-.257.099-3.218.013-3.293.013-3.287-.234-3.751a2.43 2.43 0 0 0-.289-.412c-.315-.345-2.966-2.8-3.167-2.934a2.719 2.719 0 0 0-.441-.223c-.234-.087-.289-.09-2.05-.103L14 6.996v6.002m-7.34 3.507c-.958.148-1.804.886-2.076 1.812-.081.277-.083.936-.004 1.273.122.516.471 1.065.869 1.365.472.356.969.524 1.551.524.978 0 1.814-.518 2.237-1.385.25-.512.33-1.269.187-1.754-.245-.828-.928-1.517-1.744-1.757-.226-.067-.806-.111-1.02-.078'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDelivery);
export default ForwardRef;
