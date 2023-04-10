import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgReplay = (
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
            d='M2.75 12A9.25 9.25 0 0 1 19.4 6.45a.75.75 0 0 0 1.312-.214l1-2.999a.75.75 0 0 0-1.424-.474l-.58 1.743A10.72 10.72 0 0 0 12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12a.75.75 0 0 0-1.5 0 9.25 9.25 0 0 1-18.5 0Zm11.567-1.342L11.17 9.085A1.5 1.5 0 0 0 9 10.427v3.146a1.5 1.5 0 0 0 2.17 1.342l3.147-1.573c1.105-.553 1.105-2.13 0-2.684Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReplay);
export default ForwardRef;
