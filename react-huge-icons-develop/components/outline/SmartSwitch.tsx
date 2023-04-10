import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartSwitch = (
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
            d='M15.712 7.045a.75.75 0 0 0 1.061-1.06l-1.06 1.06Zm-6.364 1.06a.75.75 0 0 0 1.061 1.061l-1.06-1.06Zm-2.121-2.12a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.181a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM5 14h.75H5Zm2-2v-.75.75Zm0 6v.75V18Zm-2-2h-.75H5Zm14 0h.75H19Zm-2 2v-.75.75Zm2-4h-.75.75Zm-2-2v-.75.75Zm-5 2h-.75.75Zm2-2v.75V12Zm0 6v.75V18Zm-2-2h.75H12Zm0-10.493a5.23 5.23 0 0 1 3.712 1.538l1.061-1.06A6.731 6.731 0 0 0 12 4.006v1.5Zm-1.591 3.66A2.24 2.24 0 0 1 12 8.506v-1.5a3.74 3.74 0 0 0-2.652 1.099l1.061 1.06ZM8.288 7.044A5.231 5.231 0 0 1 12 5.507v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.061ZM12 8.507a2.24 2.24 0 0 1 1.591.66l1.06-1.061A3.74 3.74 0 0 0 12 7.007v1.5ZM18.25 14v2h1.5v-2h-1.5ZM17 17.25H7v1.5h10v-1.5ZM5.75 16v-2h-1.5v2h1.5ZM7 12.75h10v-1.5H7v1.5ZM5.75 14c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 4.25 14h1.5ZM7 17.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 7 18.75v-1.5ZM18.25 16c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 19.75 16h-1.5Zm1.5-2A2.75 2.75 0 0 0 17 11.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM17 17.25h-3v1.5h3v-1.5ZM12.75 16v-2h-1.5v2h1.5ZM14 12.75h3v-1.5h-3v1.5ZM12.75 14c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 11.25 14h1.5ZM14 17.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 14 18.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartSwitch);
export default ForwardRef;
