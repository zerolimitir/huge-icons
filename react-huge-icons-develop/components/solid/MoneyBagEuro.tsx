import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoneyBagEuro = (
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
            d='M15.602 5.25H8.398c-1.162-1.57.404-3.768 2.35-3.14l.927.3c.211.067.439.067.65 0l.928-.3c1.945-.628 3.512 1.57 2.349 3.14Zm-7.096 1.5h6.988c1.32.73 2.35 1.95 2.822 3.46l1.25 4c1.207 3.864-1.68 7.79-5.727 7.79H10.16c-4.048 0-6.934-3.926-5.727-7.79l1.25-4a5.996 5.996 0 0 1 2.822-3.46ZM9.75 14.5c0-.084.004-.168.011-.25H12a.75.75 0 0 0 0-1.5h-1.621c.504-.61 1.267-1 2.121-1 .77 0 1.464.315 1.964.825a.75.75 0 1 0 1.072-1.05 4.25 4.25 0 0 0-6.91 1.224H8a.75.75 0 0 0 0 1.501h.257a4.315 4.315 0 0 0 0 .5H8a.75.75 0 0 0 0 1.5h.626a4.25 4.25 0 0 0 6.91 1.224.75.75 0 1 0-1.072-1.05 2.74 2.74 0 0 1-1.964.826c-.854 0-1.617-.39-2.121-1H12a.75.75 0 0 0 0-1.5H9.761a2.784 2.784 0 0 1-.011-.25Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyBagEuro);
export default ForwardRef;
