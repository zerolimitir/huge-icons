import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAlarmMinus = (
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
            d='m4.874 18.498-2.457 3.03a.75.75 0 0 0 1.166.944l2.315-2.856a9.054 9.054 0 0 1-1.024-1.118Zm13.228 1.118 2.315 2.856a.75.75 0 0 0 1.166-.945l-2.457-3.03a9.05 9.05 0 0 1-1.024 1.119Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M21 13a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7.884 1.7a.75.75 0 0 1-.387.987A11.292 11.292 0 0 0 2.625 6.78a.75.75 0 0 1-1.25-.83 12.797 12.797 0 0 1 5.521-4.637.75.75 0 0 1 .988.387Zm8.232 0a.75.75 0 0 1 .988-.387 12.797 12.797 0 0 1 5.52 4.636.75.75 0 0 1-1.249.83 11.297 11.297 0 0 0-4.872-4.092.75.75 0 0 1-.387-.987ZM15.75 13a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAlarmMinus);
export default ForwardRef;
