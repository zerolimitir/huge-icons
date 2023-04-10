import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWarningPolygon = (
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
        <circle cx={12} cy={17} r={1} fill='currentColor' transform='rotate(-180 12 17)' />
        <path
            fill='currentColor'
            d='M11.25 14a.75.75 0 0 0 1.5 0h-1.5Zm1.5-7a.75.75 0 0 0-1.5 0h1.5ZM5.078 5.44l.383.645-.383-.646Zm0 13.12.383-.645-.383.646Zm9 2.869-.382-.646.383.646Zm-4.156 0-.383.645.383-.645Zm9-2.868.382.645-.382-.645Zm0-13.122-.383.646.383-.646Zm-4.844-2.868-.382.646.383-.646Zm-4.156 0-.383-.645.383.645ZM12.75 14V7h-1.5v7h1.5Zm.946-10.783 4.843 2.868.765-1.291-4.843-2.868-.765 1.29Zm6.554 5.915v5.736h1.5V9.132h-1.5Zm-1.71 8.783-4.844 2.868.765 1.291 4.843-2.868-.765-1.29Zm-8.236 2.868L5.46 17.915l-.765 1.291 4.843 2.868.765-1.29ZM3.75 14.868V9.132h-1.5v5.736h1.5Zm1.71-8.783 4.844-2.868-.765-1.291-4.843 2.868.765 1.29ZM3.75 9.132c0-1.265.658-2.424 1.71-3.047l-.764-1.291c-1.52.9-2.446 2.556-2.446 4.338h1.5Zm1.71 8.783c-1.052-.623-1.71-1.782-1.71-3.047h-1.5c0 1.782.927 3.438 2.446 4.338l.765-1.29Zm8.236 2.868a3.317 3.317 0 0 1-3.392 0l-.765 1.291a4.82 4.82 0 0 0 4.922 0l-.765-1.29Zm6.554-5.915c0 1.265-.658 2.424-1.71 3.047l.764 1.291c1.52-.9 2.446-2.556 2.446-4.338h-1.5Zm-1.71-8.783c1.052.623 1.71 1.782 1.71 3.047h1.5c0-1.782-.927-3.438-2.446-4.338l-.765 1.29Zm-4.08-4.16a4.817 4.817 0 0 0-4.92 0l.764 1.292a3.317 3.317 0 0 1 3.392 0l.765-1.291Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWarningPolygon);
export default ForwardRef;
