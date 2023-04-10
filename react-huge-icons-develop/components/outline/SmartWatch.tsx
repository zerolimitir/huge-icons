import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartWatch = (
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
            d='M12.75 15a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.962-3.712a.75.75 0 0 0 1.061-1.061l-1.06 1.06Zm-6.364 1.06a.75.75 0 1 0 1.061 1.061l-1.06-1.06Zm-2.121-2.121a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 0 0 1.06-1.06l-1.06 1.06ZM5 10h-.75H5Zm4-4v.75V6Zm0 12v.75V18Zm-4-4h.75H5Zm14 0h.75H19Zm-4 4v-.75.75Zm4-8h-.75.75Zm-4-4v-.75V6Zm1-2h-.75.75ZM8 4h-.75H8Zm2-2v-.75V2Zm4 0v.75V2ZM8 20h.75H8Zm8 0h.75H16Zm-2 2v-.75.75Zm-4 0v.75V22Zm2-12.25a5.23 5.23 0 0 1 3.712 1.538l1.061-1.061A6.731 6.731 0 0 0 12 8.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 12 12.75v-1.5a3.74 3.74 0 0 0-2.652 1.098l1.061 1.061Zm-2.121-2.121A5.231 5.231 0 0 1 12 9.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 12.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 12 11.25v1.5ZM18.25 10v4h1.5v-4h-1.5ZM15 17.25H9v1.5h6v-1.5ZM5.75 14v-4h-1.5v4h1.5ZM9 6.75h6v-1.5H9v1.5ZM5.75 10A3.25 3.25 0 0 1 9 6.75v-1.5A4.75 4.75 0 0 0 4.25 10h1.5ZM9 17.25A3.25 3.25 0 0 1 5.75 14h-1.5A4.75 4.75 0 0 0 9 18.75v-1.5ZM18.25 14A3.25 3.25 0 0 1 15 17.25v1.5A4.75 4.75 0 0 0 19.75 14h-1.5Zm1.5-4A4.75 4.75 0 0 0 15 5.25v1.5A3.25 3.25 0 0 1 18.25 10h1.5Zm-4.5-6v2h1.5V4h-1.5Zm-6.5 2V4h-1.5v2h1.5ZM10 2.75h4v-1.5h-4v1.5ZM8.75 4c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 7.25 4h1.5Zm8 0A2.75 2.75 0 0 0 14 1.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Zm-8 16v-2h-1.5v2h1.5Zm6.5-2v2h1.5v-2h-1.5ZM14 21.25h-4v1.5h4v-1.5ZM15.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 20h-1.5Zm-8 0A2.75 2.75 0 0 0 10 22.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartWatch);
export default ForwardRef;
