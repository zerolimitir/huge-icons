import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWalletCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.42 2.044a4.83 4.83 0 0 0-.579.139 3.972 3.972 0 0 0-2.653 2.639C8.09 5.132 8 5.641 8 5.883V6h14v-.091c0-.243-.094-.789-.186-1.082a4.006 4.006 0 0 0-3.269-2.784c-.375-.052-6.759-.051-7.125.001M2 14v2h2.153c2.363 0 2.342.002 2.815-.248a2.3 2.3 0 0 0 .465-.368A1.91 1.91 0 0 0 8 14c0-.895-.597-1.678-1.477-1.936-.187-.055-.517-.064-2.37-.064H2v2m19.694 3.316c-.132.061-.485.44-1.676 1.8-1.384 1.582-1.519 1.724-1.633 1.724-.102 0-.29-.133-1.025-.724-.936-.752-1.125-.874-1.362-.875-.208-.001-.478.152-.617.351a.761.761 0 0 0-.039.768c.117.203 1.921 1.646 2.284 1.826.523.26 1.194.221 1.694-.098.227-.144.76-.727 2.403-2.628.972-1.124.949-1.094.992-1.296a.743.743 0 0 0-.137-.628c-.187-.248-.602-.351-.884-.22'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletCheck);
export default ForwardRef;
