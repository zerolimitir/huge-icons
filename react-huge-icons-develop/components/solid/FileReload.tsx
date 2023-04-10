import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileReload = (
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
            d='M3 6v12a4 4 0 0 0 4 4h4.343c.308 0 .612-.035.907-.104V18A4.75 4.75 0 0 1 17 13.25h3.896c.069-.295.104-.6.104-.907V6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4Zm11.172 14.828a4.013 4.013 0 0 1-.422.367V18A3.25 3.25 0 0 1 17 14.75h3.195a4.003 4.003 0 0 1-.367.422l-5.656 5.656ZM11.285 6.914a2.25 2.25 0 0 1 2.873 2.872.75.75 0 1 0 1.414.5 3.75 3.75 0 0 0-4.785-4.787.75.75 0 0 0 .498 1.415Zm2 5.658a.75.75 0 0 0-.498-1.414 2.25 2.25 0 0 1-2.873-2.873.75.75 0 0 0-1.415-.499 3.75 3.75 0 0 0 4.786 4.786Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileReload);
export default ForwardRef;
