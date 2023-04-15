import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSearchShortSeparated = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.04 1.265a10.264 10.264 0 0 0-8.72 5.686C1.073 9.458.911 12.337 1.867 15c.821 2.285 2.502 4.251 4.676 5.469 1.658.93 3.72 1.395 5.59 1.26 2.491-.179 4.594-1.1 6.463-2.832.609-.564 1.401-1.595 1.874-2.44.929-1.661 1.396-3.738 1.259-5.604-.187-2.558-1.212-4.822-2.987-6.594-1.653-1.65-3.839-2.701-6.102-2.935a13.902 13.902 0 0 0-1.6-.059m1.352 1.537c3.336.36 6.148 2.535 7.305 5.649a8.748 8.748 0 0 1-2.016 9.229 8.644 8.644 0 0 1-6.181 2.56 8.727 8.727 0 0 1-8.74-8.74c0-2.335.909-4.532 2.559-6.181a8.739 8.739 0 0 1 5.241-2.515 11.55 11.55 0 0 1 1.832-.002m7.28 16.56c-.349.184-.497.639-.319.981.117.225 2.188 2.278 2.376 2.356a.735.735 0 0 0 1.031-.679.847.847 0 0 0-.077-.332c-.114-.218-2.188-2.271-2.372-2.347a.8.8 0 0 0-.639.021'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSearchShortSeparated);
export default ForwardRef;
