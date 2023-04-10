import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgReloadRectangle = (
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
            d='M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M13.509 5.303a.75.75 0 0 1 .974.42l.795 2.002a.75.75 0 0 1-1.066.93A4.497 4.497 0 0 0 12 8.084c-2.397 0-4.25 1.802-4.25 3.917 0 .345.048.678.138.995a.75.75 0 1 1-1.443.41A5.13 5.13 0 0 1 6.25 12c0-3.04 2.624-5.417 5.75-5.417.433 0 .856.045 1.262.131l-.173-.437a.75.75 0 0 1 .42-.974Zm3.12 4.776a.75.75 0 0 1 .926.516c.127.449.195.92.195 1.405 0 3.04-2.624 5.417-5.75 5.417a6.16 6.16 0 0 1-1.262-.131l.173.437a.75.75 0 1 1-1.394.554l-.795-2.002a.75.75 0 0 1 1.066-.93 4.497 4.497 0 0 0 2.212.572c2.397 0 4.25-1.802 4.25-3.917a3.63 3.63 0 0 0-.138-.995.75.75 0 0 1 .516-.927Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReloadRectangle);
export default ForwardRef;
