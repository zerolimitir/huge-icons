import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileAccept = (
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
            d='M3 6v12a4 4 0 0 0 4 4h4.343c.308 0 .612-.035.907-.104V18A4.75 4.75 0 0 1 17 13.25h3.896c.069-.295.104-.6.104-.907V6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4Zm11.172 14.828a4.013 4.013 0 0 1-.422.367V18A3.25 3.25 0 0 1 17 14.75h3.195a4.013 4.013 0 0 1-.367.422l-5.656 5.656Zm1.393-14.334a.75.75 0 0 0-1.13-.988l-2.87 3.28a.25.25 0 0 1-.344.03L9.47 7.415a.75.75 0 1 0-.937 1.172l1.752 1.402a1.75 1.75 0 0 0 2.41-.214l2.87-3.28Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileAccept);
export default ForwardRef;
