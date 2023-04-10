import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChemistry = (
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
            d='M13 2v-.75a.75.75 0 0 0-.75.75H13Zm4 0h.75a.75.75 0 0 0-.75-.75V2Zm3.553 13.106-.671.335.67-.335ZM12 1.25a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5ZM6.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 20a.75.75 0 0 0 1.5 0h-1.5ZM4 7.25a.75.75 0 0 0 0 1.5v-1.5Zm16 1.5a.75.75 0 0 0 0-1.5v1.5ZM4 21.25a.75.75 0 0 0 0 1.5v-1.5Zm16 1.5a.75.75 0 0 0 0-1.5v1.5Zm-7-20h4v-1.5h-4v1.5ZM16.25 2v6h1.5V2h-1.5ZM17 7.25h-4v1.5h4v-1.5ZM13.75 8V2h-1.5v6h1.5Zm2.58.335 3.552 7.106 1.342-.67-3.553-7.106-1.342.67Zm2.434 8.915h-7.528v1.5h7.528v-1.5Zm-8.646-1.809 3.553-7.106-1.342-.67-3.553 7.105 1.342.671Zm1.118 1.809a1.25 1.25 0 0 1-1.118-1.809l-1.342-.67c-.914 1.828.416 3.979 2.46 3.979v-1.5Zm8.646-1.809a1.25 1.25 0 0 1-1.118 1.809v1.5c2.044 0 3.374-2.151 2.46-3.98l-1.342.671ZM12 2.75h6v-1.5h-6v1.5ZM5.25 2v20h1.5V2h-1.5ZM4 8.75h16v-1.5H4v1.5Zm0 14h16v-1.5H4v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChemistry);
export default ForwardRef;
