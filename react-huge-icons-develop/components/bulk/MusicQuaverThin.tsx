import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMusicQuaverThin = (
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
            d='M12 4c0-1.45 1.24-2.907 2.915-2.48a8.753 8.753 0 0 1 4.397 14.268.75.75 0 1 1-1.124-.993 7.253 7.253 0 0 0-3.643-11.822C14.08 2.855 13.5 3.24 13.5 4v13a.75.75 0 0 1-1.5 0V4Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path fill='currentColor' d='M13.5 17a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgMusicQuaverThin);
export default ForwardRef;
