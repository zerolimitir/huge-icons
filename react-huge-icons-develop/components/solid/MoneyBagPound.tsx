import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoneyBagPound = (
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
            d='M15.602 5.25H8.398c-1.162-1.57.404-3.768 2.35-3.14l.927.3c.211.067.439.067.65 0l.928-.3c1.945-.628 3.512 1.57 2.349 3.14Zm-7.096 1.5h6.988c1.32.73 2.35 1.95 2.822 3.46l1.25 4c1.207 3.864-1.68 7.79-5.727 7.79H10.16c-4.048 0-6.934-3.926-5.727-7.79l1.25-4a5.996 5.996 0 0 1 2.822-3.46Zm4.11 3a2.135 2.135 0 0 0-2.135 2.135v.57c0 .44-.054.874-.158 1.295H9a.75.75 0 0 0 0 1.5h.703c-.154.255-.33.499-.527.727-1.103 1.286-.19 3.273 1.504 3.273H14a.75.75 0 0 0 0-1.5h-3.32a.482.482 0 0 1-.365-.796 6.908 6.908 0 0 0 1.075-1.704H13a.75.75 0 0 0 0-1.5h-1.142c.081-.424.123-.858.123-1.295v-.57a.635.635 0 1 1 1.269 0v.497a.75.75 0 0 0 1.5 0v-.497a2.135 2.135 0 0 0-2.135-2.135Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyBagPound);
export default ForwardRef;
