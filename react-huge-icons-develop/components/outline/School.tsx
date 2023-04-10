import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSchool = (
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
            d='M15 22v.75h.75V22H15Zm-6 0h-.75v.75H9V22ZM7.548 5.562l.468.585-.468-.585Zm8.904 0 .469-.586-.469.586ZM13.25 2.999l-.468.586.468-.586Zm-2.498 0-.469-.585.469.585Zm3.499 15v4h1.5v-4h-1.5Zm.75 3.25H9v1.5h6v-1.5ZM9.75 22v-4h-1.5v4h1.5ZM12 15.75A2.25 2.25 0 0 1 14.25 18h1.5A3.75 3.75 0 0 0 12 14.25v1.5Zm0-1.5A3.75 3.75 0 0 0 8.25 18h1.5A2.25 2.25 0 0 1 12 15.75v-1.5ZM21.25 8v12h1.5V8h-1.5ZM20 21.25H4v1.5h16v-1.5ZM2.75 20V8h-1.5v12h1.5ZM12.78 3.586l3.204 2.562.937-1.171-3.203-2.562-.937 1.171Zm4.922 3.165H20v-1.5h-2.298v1.5ZM4 6.75h2.298v-1.5H4v1.5Zm4.016-.603 3.203-2.562-.937-1.171L7.08 4.976l.937 1.171Zm-1.718.603a2.75 2.75 0 0 0 1.718-.603L7.08 4.976a1.25 1.25 0 0 1-.78.274v1.5Zm9.686-.603a2.75 2.75 0 0 0 1.718.603v-1.5a1.25 1.25 0 0 1-.781-.274l-.937 1.171Zm-2.266-3.733a2.75 2.75 0 0 0-3.436 0l.937 1.171a1.25 1.25 0 0 1 1.562 0l.937-1.171ZM4 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 4 22.75v-1.5ZM21.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 22.75 20h-1.5Zm1.5-12A2.75 2.75 0 0 0 20 5.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Zm-20 0c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 1.25 8h1.5Zm12 2A2.75 2.75 0 0 0 12 7.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM12 7.25A2.75 2.75 0 0 0 9.25 10h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM9.25 10A2.75 2.75 0 0 0 12 12.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5ZM12 12.75A2.75 2.75 0 0 0 14.75 10h-1.5c0 .69-.56 1.25-1.25 1.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSchool);
export default ForwardRef;
