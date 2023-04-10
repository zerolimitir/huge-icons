import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBellRinging = (
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
            d='M7.763 2.288a.75.75 0 1 1 .474 1.423l-.154.052a5.25 5.25 0 0 0-3.32 3.32l-.052.154a.75.75 0 1 1-1.423-.474l.052-.154a6.75 6.75 0 0 1 4.269-4.27l.154-.05Zm8.474 0a.75.75 0 1 0-.474 1.423l.154.052a5.25 5.25 0 0 1 3.32 3.32l.051.154a.75.75 0 1 0 1.423-.474l-.05-.154a6.75 6.75 0 0 0-4.27-4.27l-.154-.05ZM12 4C8.77 4 6.054 6.49 5.68 9.794l-.345 3.044a3.816 3.816 0 0 1-.88 2.042C3.422 16.096 4.261 18 5.83 18h12.34c1.57 0 2.408-1.904 1.374-3.12a3.817 3.817 0 0 1-.879-2.042l-.345-3.044C17.946 6.491 15.23 4 12 4Zm0 18c1.357 0 2.515-.8 2.972-1.928a.423.423 0 0 0-.395-.572H9.423a.423.423 0 0 0-.395.572C9.485 21.198 10.643 22 12 22Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBellRinging);
export default ForwardRef;
