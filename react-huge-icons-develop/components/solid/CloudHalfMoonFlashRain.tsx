import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudHalfMoonFlashRain = (
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
            d='M20.832 9.749a6.5 6.5 0 0 1 .19.144c.614-.831.978-1.86.978-2.973 0-.245-.267-.385-.495-.293a4 4 0 0 1-5.502-3.873c.015-.36-.293-.68-.634-.562a5.014 5.014 0 0 0-3.054 2.979 8.5 8.5 0 0 1 3.925 3.373 6.478 6.478 0 0 1 4.592 1.205ZM16 21.999c.828 0 1.5-.395 1.5-1.5 0-1.104-1.5-2.5-1.5-2.5s-1.5 1.396-1.5 2.5c0 1.105.672 1.5 1.5 1.5ZM4.683 17.18l3.433-4.118a.5.5 0 0 1 .884.32V15.5a.5.5 0 0 0 .5.5h1.432a.5.5 0 0 1 .385.82l-3.433 4.119a.5.5 0 0 1-.884-.32v-2.12a.5.5 0 0 0-.5-.5H5.068a.5.5 0 0 1-.385-.82Zm-1.518-.31a7 7 0 1 1 12.273-6.62A4.997 4.997 0 0 1 17 9.998c1.102 0 2.12.357 2.947.961a5.002 5.002 0 0 1-1.076 8.678 4.123 4.123 0 0 0-.26-.656 6.35 6.35 0 0 0-.673-1.062 9.285 9.285 0 0 0-.822-.928l-.094-.09a1.5 1.5 0 0 0-2.044 0l-.094.09a9.285 9.285 0 0 0-.822.928 6.374 6.374 0 0 0-.674 1.062A3.82 3.82 0 0 0 13.044 20H10.62l1.85-2.22c1.086-1.303.16-3.28-1.537-3.28H10.5v-1.12c0-1.87-2.339-2.717-3.536-1.28L3.53 16.22c-.17.203-.29.422-.366.648Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudHalfMoonFlashRain);
export default ForwardRef;
