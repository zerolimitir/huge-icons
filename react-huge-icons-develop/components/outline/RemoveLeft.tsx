import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRemoveLeft = (
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
            d='m3.524 15.44-.5.559.5-.559Zm0-6.88-.5-.56.5.559ZM7.35 18.869l.501-.559-.5.559Zm0-13.738.501.559-.5-.559Zm10.181 4.4a.75.75 0 0 0-1.06-1.061l1.06 1.06Zm-7.06 4.939a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm1.06-6a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm4.94 7.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM10.288 4.75h7.25v-1.5h-7.25v1.5ZM21.25 8.571v6.858h1.5V8.57h-1.5ZM17.537 19.25h-7.249v1.5h7.25v-1.5Zm-9.687-.94-3.825-3.428-1.002 1.117 3.826 3.428L7.85 18.31ZM4.025 9.118 7.85 5.69 6.849 4.573 3.023 8l1.002 1.117Zm0 5.764c-1.7-1.523-1.7-4.24 0-5.764L3.023 8.001C.66 10.121.66 13.88 3.023 16l1.002-1.117Zm6.263 4.368a3.65 3.65 0 0 1-2.438-.94l-1.001 1.117a5.152 5.152 0 0 0 3.44 1.323v-1.5Zm10.962-3.821c0 2.127-1.68 3.821-3.713 3.821v1.5c2.896 0 5.213-2.4 5.213-5.321h-1.5ZM17.537 4.75c2.034 0 3.713 1.694 3.713 3.821h1.5c0-2.921-2.317-5.321-5.213-5.321v1.5Zm-7.249-1.5c-1.268 0-2.49.472-3.44 1.323L7.85 5.69a3.652 3.652 0 0 1 2.438-.94v-1.5Zm6.182 5.22-3 3 1.06 1.06 3-3-1.06-1.06Zm-3 3-3 3 1.06 1.06 3-3-1.06-1.06Zm1.06 0-3-3-1.06 1.06 3 3 1.06-1.06Zm-1.06 1.06 3 3 1.06-1.06-3-3-1.06 1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRemoveLeft);
export default ForwardRef;
