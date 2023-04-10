import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgImageFavourite = (
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
            d='M2.75 6A3.25 3.25 0 0 1 6 2.75h6a.75.75 0 0 0 0-1.5H6A4.75 4.75 0 0 0 1.25 6v12A4.75 4.75 0 0 0 6 22.75h12A4.75 4.75 0 0 0 22.75 18v-8a.75.75 0 0 0-1.5 0v3.51a2.002 2.002 0 0 0-.14-.104l-2.381-1.587a4 4 0 0 0-5.048.5L10.32 15.68a4 4 0 0 1-5.047.5L2.75 14.5V6Zm16.018-3.4-.268.289-.268-.29a1.794 1.794 0 0 0-2.677 0c-.74.8-.74 2.096 0 2.895l1.874 2.026c.591.64 1.55.64 2.142 0l1.874-2.026c.74-.8.74-2.095 0-2.894-.739-.8-1.938-.8-2.677 0ZM8.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgImageFavourite);
export default ForwardRef;
