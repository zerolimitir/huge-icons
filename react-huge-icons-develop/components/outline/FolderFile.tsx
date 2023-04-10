import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFolderFile = (
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
            d='m11.253 7.768-.442.606.442-.606Zm1.494 1.089.442-.606-.442.606ZM4.25 7.535a.75.75 0 0 0 1.5 0h-1.5Zm14 2.625a.75.75 0 0 0 1.5 0h-1.5Zm2 3.465V18h1.5v-4.375h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18v-7h-1.5v7h1.5Zm11.354-7.625H17v-1.5h-1.896v1.5ZM7 7.75h1.897v-1.5H7v1.5Zm3.811.624 1.494 1.089.884-1.212-1.494-1.089-.884 1.212ZM8.897 7.75a3.25 3.25 0 0 1 1.914.624l.884-1.212a4.75 4.75 0 0 0-2.798-.912v1.5Zm6.207 1.125a3.25 3.25 0 0 1-1.915-.624l-.884 1.212a4.75 4.75 0 0 0 2.799.912v-1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-4.375A4.75 4.75 0 0 0 17 8.875v1.5a3.25 3.25 0 0 1 3.25 3.25h1.5ZM3.75 11A3.25 3.25 0 0 1 7 7.75v-1.5A4.75 4.75 0 0 0 2.25 11h1.5Zm2-3.465V4h-1.5v3.535h1.5ZM7 2.75h10v-1.5H7v1.5ZM18.25 4v6.16h1.5V4h-1.5ZM17 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 17 1.25v1.5ZM5.75 4c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 4.25 4h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderFile);
export default ForwardRef;
