import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileUpload = (
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
            d='M3 6v12a4 4 0 0 0 4 4h4.343c.308 0 .612-.035.907-.104V18A4.75 4.75 0 0 1 17 13.25h3.896c.069-.295.104-.6.104-.907V6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4Zm11.172 14.828a4.013 4.013 0 0 1-.422.367V18A3.25 3.25 0 0 1 17 14.75h3.195a4.013 4.013 0 0 1-.367.422l-5.656 5.656ZM11.116 7.944a1.26 1.26 0 0 1 .134-.116V12a.75.75 0 1 0 1.5 0V7.828c.047.035.091.074.134.116L14.47 9.53a.75.75 0 1 0 1.06-1.06l-1.585-1.586a2.75 2.75 0 0 0-3.89 0L8.47 8.47a.75.75 0 0 0 1.06 1.06l1.586-1.586Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileUpload);
export default ForwardRef;
