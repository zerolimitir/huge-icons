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
            d='M5.46 5.459a.75.75 0 1 0-1.061-1.06 10.719 10.719 0 0 0-3.149 7.6c0 2.97 1.204 5.658 3.149 7.602a.75.75 0 1 0 1.06-1.06A9.219 9.219 0 0 1 2.75 12a9.219 9.219 0 0 1 2.71-6.541Zm14.14-1.06a.75.75 0 0 0-1.06 1.06 9.219 9.219 0 0 1 2.709 6.54 9.218 9.218 0 0 1-2.71 6.542.75.75 0 0 0 1.061 1.06A10.719 10.719 0 0 0 22.75 12c0-2.969-1.204-5.657-3.149-7.602ZM8.288 8.286a.75.75 0 0 0-1.061-1.06A6.731 6.731 0 0 0 5.25 12a6.73 6.73 0 0 0 1.977 4.773.75.75 0 0 0 1.06-1.06A5.231 5.231 0 0 1 6.75 12c0-1.45.587-2.762 1.538-3.713Zm8.485-1.06a.75.75 0 0 0-1.06 1.06A5.231 5.231 0 0 1 17.25 12a5.23 5.23 0 0 1-1.538 3.712.75.75 0 1 0 1.061 1.06A6.73 6.73 0 0 0 18.75 12a6.731 6.731 0 0 0-1.977-4.773ZM13.6 8.45a.75.75 0 1 0-1.2-.9l-3 4a.75.75 0 0 0 .6 1.2h2.5l-2.1 2.8a.75.75 0 1 0 1.2.9l3-4a.75.75 0 0 0-.6-1.2h-2.5l2.1-2.8Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWirelessCharging);
export default ForwardRef;
