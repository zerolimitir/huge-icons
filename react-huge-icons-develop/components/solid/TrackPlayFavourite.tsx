import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTrackPlayFavourite = (
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
            d='M21.25 12a9.25 9.25 0 1 0-7.862 9.147.75.75 0 0 1 .224 1.483c-.527.079-1.065.12-1.612.12-5.937 0-10.75-4.813-10.75-10.75S6.063 1.25 12 1.25 22.75 6.063 22.75 12c0 .403-.022.801-.066 1.194a.75.75 0 1 1-1.49-.165A9.45 9.45 0 0 0 21.25 12Zm-2.482 4.6-.268.289-.268-.29a1.794 1.794 0 0 0-2.677 0c-.74.8-.74 2.096 0 2.895l1.874 2.026c.591.64 1.55.64 2.142 0l1.874-2.026c.74-.8.74-2.095 0-2.895a1.794 1.794 0 0 0-2.677 0Zm-4.451-5.942L11.17 9.085A1.5 1.5 0 0 0 9 10.427v3.146a1.5 1.5 0 0 0 2.17 1.342l3.147-1.573c1.105-.553 1.105-2.13 0-2.684Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackPlayFavourite);
export default ForwardRef;
