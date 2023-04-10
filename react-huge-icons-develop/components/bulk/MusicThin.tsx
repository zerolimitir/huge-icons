import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMusicThin = (
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
            d='M18.323 3.68A1.25 1.25 0 0 1 20 4.856V12.5a.75.75 0 0 0 1.5 0V4.855a2.75 2.75 0 0 0-3.69-2.584l-5.683 2.067A4.75 4.75 0 0 0 9 8.802V18.5a.75.75 0 0 0 1.5 0V8.802a3.25 3.25 0 0 1 2.14-3.055l5.683-2.066Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M21.5 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-11 6a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMusicThin);
export default ForwardRef;
