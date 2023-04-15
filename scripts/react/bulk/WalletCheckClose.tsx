import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWalletCheckClose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2 12v3.005l1.79-.014c1.747-.013 1.797-.016 2.07-.106 1.008-.334 1.712-1.045 2.026-2.046.079-.252.094-.384.094-.839 0-.454-.015-.588-.094-.84-.312-1-1.011-1.706-2.026-2.044-.274-.092-.319-.094-2.07-.107L2 8.995V12m19.694 4.316c-.132.061-.485.44-1.676 1.8-1.384 1.582-1.519 1.724-1.633 1.724-.102 0-.29-.133-1.025-.724-.936-.752-1.125-.874-1.362-.875-.208-.001-.478.152-.617.351a.761.761 0 0 0-.039.768c.117.203 1.921 1.646 2.284 1.826.523.26 1.194.221 1.694-.098.227-.144.76-.727 2.403-2.628.972-1.124.949-1.094.992-1.296a.743.743 0 0 0-.137-.628c-.187-.248-.602-.351-.884-.22'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletCheckClose);
export default ForwardRef;
