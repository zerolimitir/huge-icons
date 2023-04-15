import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgClockCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.316 7.393a.731.731 0 0 0-.27.295c-.085.176-.086.199-.086 2.836v2.659l.09.178c.05.098.149.218.222.266.072.048.837.323 1.7.61 1.764.588 1.845.604 2.153.408.195-.123.31-.314.345-.57.031-.231-.145-.566-.363-.69-.092-.053-.72-.279-1.396-.503l-1.229-.408-.011-2.327-.011-2.327-.092-.161c-.137-.239-.329-.353-.623-.37-.217-.013-.266-.001-.429.104'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClockCircle);
export default ForwardRef;
