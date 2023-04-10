import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWirelessCharging = (
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
            d='M13.45 7.4a.75.75 0 0 1 .15 1.05l-2.1 2.8H14a.75.75 0 0 1 .6 1.2l-3 4a.75.75 0 0 1-1.2-.9l2.1-2.8H10a.75.75 0 0 1-.6-1.2l3-4a.75.75 0 0 1 1.05-.15Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M8.288 7.227a.75.75 0 0 1 0 1.06A5.231 5.231 0 0 0 6.75 12a5.23 5.23 0 0 0 1.538 3.712.75.75 0 1 1-1.061 1.06A6.731 6.731 0 0 1 5.25 12a6.73 6.73 0 0 1 1.977-4.773.75.75 0 0 1 1.06 0Zm7.424 0a.75.75 0 0 1 1.061 0A6.731 6.731 0 0 1 18.75 12a6.731 6.731 0 0 1-1.977 4.773.75.75 0 0 1-1.06-1.06A5.231 5.231 0 0 0 17.25 12a5.23 5.23 0 0 0-1.538-3.712.75.75 0 0 1 0-1.061Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M5.46 4.398a.75.75 0 0 1 0 1.061 9.219 9.219 0 0 0-2.71 6.54 9.219 9.219 0 0 0 2.71 6.542.75.75 0 0 1-1.061 1.06A10.719 10.719 0 0 1 1.25 12c0-2.969 1.204-5.657 3.149-7.602a.75.75 0 0 1 1.06 0Zm13.08 0a.75.75 0 0 1 1.061 0A10.719 10.719 0 0 1 22.75 12c0 2.968-1.204 5.657-3.149 7.601a.75.75 0 0 1-1.06-1.06A9.218 9.218 0 0 0 21.25 12a9.219 9.219 0 0 0-2.71-6.541.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWirelessCharging);
export default ForwardRef;
