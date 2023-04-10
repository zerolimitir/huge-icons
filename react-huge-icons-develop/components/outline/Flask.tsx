import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFlask = (
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
            d='M10 2v-.75a.75.75 0 0 0-.75.75H10Zm4 0h.75a.75.75 0 0 0-.75-.75V2Zm0 6.29h-.75a.75.75 0 0 0 .536.719l.214-.72Zm-4 0 .214.719a.75.75 0 0 0 .536-.72H10ZM8 1.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10 8.5a.75.75 0 0 0 0 1.5v-1.5Zm12 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8-10h4v-1.5h-4v1.5ZM18.25 15A6.25 6.25 0 0 1 12 21.25v1.5A7.75 7.75 0 0 0 19.75 15h-1.5ZM12 21.25A6.25 6.25 0 0 1 5.75 15h-1.5A7.75 7.75 0 0 0 12 22.75v-1.5Zm1.786-12.241A6.253 6.253 0 0 1 18.25 15h1.5a7.753 7.753 0 0 0-5.536-7.429l-.428 1.438ZM13.25 2v6.29h1.5V2h-1.5Zm-7.5 13a6.253 6.253 0 0 1 4.464-5.991L9.786 7.57A7.753 7.753 0 0 0 4.25 15h1.5Zm5-6.71V2h-1.5v6.29h1.5ZM8 2.75h8v-1.5H8v1.5Zm-2 10h12v-1.5H6v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlask);
export default ForwardRef;
