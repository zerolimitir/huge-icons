import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHanger = (
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
            d='M12 4.75c-.734 0-1.299.577-1.299 1.25a.75.75 0 0 1-1.5 0c0-1.536 1.27-2.75 2.799-2.75S14.799 4.464 14.799 6c0 .55-.166 1.064-.449 1.494a9.006 9.006 0 0 1-.575.756l-.103.125c-.158.192-.304.367-.438.548-.21.282-.348.518-.421.73l8.754 6.104c2.259 1.575 1.065 4.993-1.62 4.993H4.053c-2.684 0-3.878-3.418-1.62-4.993l8.854-6.173c.107-.62.436-1.142.745-1.558.16-.214.334-.425.493-.617l.094-.113c.19-.23.35-.432.48-.628.127-.194.2-.422.2-.668 0-.673-.564-1.25-1.298-1.25Zm0 6.164-8.71 6.074c-.984.687-.539 2.262.762 2.262h15.896c1.3 0 1.746-1.575.761-2.262L12 10.914Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHanger);
export default ForwardRef;
