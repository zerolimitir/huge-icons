import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMailSilent = (
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
            d='M2.53 1.47a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm18.94 21.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM7 2.25a.75.75 0 0 0 0 1.5v-1.5Zm14.168 15.48a.75.75 0 1 0 1.462.337l-1.462-.336Zm-7.184-7.954a.75.75 0 1 0 .832 1.248l-.832-1.248Zm4.432-1.152a.75.75 0 1 0-.832-1.248l.832 1.248ZM18 20.25H6v1.5h12v-1.5ZM2.75 17V7h-1.5v10h1.5ZM6 20.25A3.25 3.25 0 0 1 2.75 17h-1.5A4.75 4.75 0 0 0 6 21.75v-1.5ZM3.287 3.1A4.745 4.745 0 0 0 1.25 7h1.5c0-1.104.55-2.08 1.395-2.669l-.858-1.23ZM1.47 2.53l1.716 1.716 1.06-1.06L2.53 1.47 1.47 2.53Zm1.716 1.716 16.568 16.568 1.06-1.06L4.246 3.186l-1.06 1.06Zm16.568 16.568 1.716 1.716 1.06-1.06-1.716-1.716-1.06 1.06Zm.101-1.145A3.232 3.232 0 0 1 18 20.25v1.5a4.731 4.731 0 0 0 2.713-.85l-.858-1.231ZM21.25 7v10h1.5V7h-1.5ZM18 3.75A3.25 3.25 0 0 1 21.25 7h1.5A4.75 4.75 0 0 0 18 2.25v1.5Zm-11 0h11v-1.5H7v1.5ZM21.25 17c0 .252-.029.497-.082.73l1.462.337c.079-.344.12-.701.12-1.067h-1.5Zm-6.434-5.976 3.6-2.4-.832-1.248-3.6 2.4.832 1.248Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailSilent);
export default ForwardRef;
