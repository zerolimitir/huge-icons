import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMapCircleGps = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.284 2.045C8.82 2.33 6.726 4.203 6.167 6.62c-.743 3.217 1.207 6.41 4.393 7.194a5.994 5.994 0 0 0 7.263-4.394 6.036 6.036 0 0 0-.85-4.766 6.037 6.037 0 0 0-5.689-2.609m2.994 3.468c.172.093.293.305.267.473-.01.069-.471 1.185-1.025 2.48-1.108 2.593-1.119 2.614-1.438 2.614-.2 0-.343-.064-.427-.193-.036-.055-.189-.469-.339-.92-.162-.484-.31-.858-.361-.912-.058-.063-.357-.183-.931-.375-.464-.155-.872-.305-.906-.331a.524.524 0 0 1-.198-.418c0-.334.004-.336 2.6-1.443a514.547 514.547 0 0 1 2.4-1.02c.114-.041.222-.028.358.045'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapCircleGps);
export default ForwardRef;
