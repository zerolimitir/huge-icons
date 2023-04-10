import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgInjection = (
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
            d='M18.965 2.47a.75.75 0 0 0-1.06 1.06l.884.884-2.298 2.298-.177-.176a2 2 0 0 0-2.829 0l-3.72 3.72 7.34 1.145.623-.623a2 2 0 0 0 0-2.828l-.177-.177 2.299-2.298.883.884a.75.75 0 1 0 1.06-1.06l-1.4-1.401-.013-.014-.014-.013-1.4-1.401Zm-10.514 9.1-.151.151a2 2 0 0 0-.566 1.131l-.236 1.65c-.053.371-.001.727.13 1.043l-5.146 4.913a.75.75 0 1 0 1.036 1.085l5.157-4.925c.327.144.698.202 1.086.147l1.65-.236a2 2 0 0 0 1.132-.565l3.249-3.25-7.34-1.144Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInjection);
export default ForwardRef;
