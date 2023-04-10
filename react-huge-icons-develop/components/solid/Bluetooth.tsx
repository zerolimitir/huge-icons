import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBluetooth = (
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
            fill='currentColor'
            fillRule='evenodd'
            d='M4.53 3.47a.75.75 0 0 0-1.06 1.06l7.353 7.353-5.239 3.493a.75.75 0 1 0 .832 1.248L11.25 13.4v5.464c0 1.484 1.73 2.294 2.87 1.344l2.743-2.285 2.607 2.606a.75.75 0 1 0 1.06-1.06l-16-16Zm11.268 13.389L12.75 13.81v5.054a.25.25 0 0 0 .41.192l2.638-2.198Zm-2.502-6.624 1.081 1.082 2.925-1.95a1.75 1.75 0 0 0 .15-2.8L14.12 3.79c-1.14-.95-2.87-.14-2.87 1.344v3.054l1.5 1.5V5.135a.25.25 0 0 1 .41-.192l3.331 2.776a.25.25 0 0 1-.021.4l-3.174 2.116Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBluetooth);
export default ForwardRef;
