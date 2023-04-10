import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHotspotOff = (
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
            d='M6.6 5.55a.75.75 0 0 1-.15 1.05 9.235 9.235 0 0 0-3.7 7.4 9.219 9.219 0 0 0 2.71 6.54.75.75 0 0 1-1.061 1.061A10.719 10.719 0 0 1 1.25 14c0-3.517 1.69-6.64 4.3-8.6a.75.75 0 0 1 1.05.15Zm2.916 2.935a.75.75 0 0 1-.249 1.031A5.246 5.246 0 0 0 6.75 14a5.23 5.23 0 0 0 1.538 3.712.75.75 0 1 1-1.061 1.06A6.731 6.731 0 0 1 5.25 14a6.747 6.747 0 0 1 3.235-5.764.75.75 0 0 1 1.031.25ZM12 12.75A1.25 1.25 0 1 0 13.25 14a.75.75 0 0 1 1.5 0A2.75 2.75 0 1 1 12 11.25a.75.75 0 0 1 0 1.5Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M1.47 1.47a.75.75 0 0 1 1.06 0l20 20a.75.75 0 1 1-1.06 1.06l-20-20a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 4.75a9.231 9.231 0 0 0-3.15.55.75.75 0 0 1-.51-1.41A10.732 10.732 0 0 1 12 3.25c5.937 0 10.75 4.813 10.75 10.75 0 1.284-.226 2.517-.64 3.66a.75.75 0 1 1-1.41-.51c.356-.982.55-2.043.55-3.15A9.25 9.25 0 0 0 12 4.75ZM11.25 8a.75.75 0 0 1 .75-.75A6.75 6.75 0 0 1 18.75 14a.75.75 0 1 1-1.5 0c0-2.9-2.35-5.25-5.25-5.25a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHotspotOff);
export default ForwardRef;
