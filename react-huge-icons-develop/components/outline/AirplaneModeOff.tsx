import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAirplaneModeOff = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M21 21 3 3m11.395 11.395v2.143c0 .428.14.847.402 1.204l1.887 2.564c.681.927-.434 2.071-1.532 1.573l-2.08-.943a2.619 2.619 0 0 0-2.143 0l-2.081.943c-1.099.498-2.213-.646-1.532-1.573l1.887-2.564c.262-.357.402-.776.402-1.204v-2.6c0-.599-.536-1.084-1.198-1.084H4.2c-1.203 0-1.655-1.428-.635-2.006l4.65-2.634m1.39-2.61V4.396a2.395 2.395 0 0 1 4.79 0v1.829c0 .748.426 1.444 1.126 1.84l4.914 2.784c1.02.578.569 2.006-.635 2.006h-2.946'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAirplaneModeOff);
export default ForwardRef;
