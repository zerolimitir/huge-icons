import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBellSilent = (
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
            d='M2.47 2.47a.75.75 0 0 0 0 1.06l3.612 3.613a6.67 6.67 0 0 0-.402 1.651l-.345 3.044a3.816 3.816 0 0 1-.88 2.042C3.422 15.096 4.261 17 5.83 17h10.11l4.53 4.53a.75.75 0 1 0 1.06-1.06l-18-18a.75.75 0 0 0-1.06 0Zm16.195 9.368-.345-3.044C17.946 5.491 15.23 3 12 3a6.22 6.22 0 0 0-3.745 1.255l11.597 11.597a1.898 1.898 0 0 0-.308-1.972 3.816 3.816 0 0 1-.879-2.042Zm-3.693 7.234C14.515 20.198 13.357 21 12 21s-2.515-.8-2.972-1.928a.423.423 0 0 1 .395-.572h5.154a.423.423 0 0 1 .395.572Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBellSilent);
export default ForwardRef;
