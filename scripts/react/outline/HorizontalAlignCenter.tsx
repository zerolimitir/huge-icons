import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHorizontalAlignCenter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 1.278a.883.883 0 0 0-.481.374c-.062.112-.071.277-.082 1.354l-.012 1.226-1.328.019c-1.473.021-1.609.039-2.112.288A2.799 2.799 0 0 0 6.333 6.32c-.063.224-.073.422-.073 1.44 0 1.125.004 1.194.094 1.48.281.9.933 1.584 1.781 1.869l.325.109 1.39.013 1.39.014v1.515H8.487c-2.904 0-3.022.006-3.487.189-.791.31-1.38.958-1.646 1.811-.09.286-.094.355-.094 1.48 0 1.018.01 1.216.073 1.44.219.783.75 1.436 1.446 1.777.592.29.445.278 3.611.293l2.85.013v1.149c0 .714.017 1.208.045 1.307.059.213.293.441.513.5.4.108.812-.12.92-.51.024-.087.042-.631.042-1.297v-1.149l2.85-.013c2.597-.013 2.871-.02 3.09-.085a2.841 2.841 0 0 0 1.967-1.985c.063-.225.073-.418.073-1.44 0-1.125-.004-1.194-.094-1.48-.266-.853-.855-1.501-1.646-1.811-.465-.183-.583-.189-3.487-.189H12.76v-1.515l1.39-.014 1.39-.013.329-.11c.841-.283 1.498-.972 1.777-1.868.09-.286.094-.355.094-1.48 0-1.022-.01-1.215-.073-1.44a2.792 2.792 0 0 0-1.465-1.782c-.501-.247-.638-.266-2.11-.287l-1.328-.019-.012-1.226c-.011-1.151-.017-1.234-.094-1.365a.807.807 0 0 0-.847-.363m3.726 4.599c.251.123.463.335.586.586.096.194.097.214.097 1.297 0 1.07-.002 1.105-.092 1.272a1.382 1.382 0 0 1-.602.597l-.226.111H8.7l-.226-.111a1.382 1.382 0 0 1-.602-.597c-.088-.164-.093-.218-.105-1.192-.009-.693.002-1.071.034-1.18a1.32 1.32 0 0 1 .79-.84c.123-.045.726-.054 3.449-.048l3.3.008.197.097m2.989 8.494c.249.122.461.332.602.597.09.167.092.202.092 1.272 0 1.087-.001 1.102-.098 1.299a1.306 1.306 0 0 1-.665.619c-.219.082-.256.082-6.457.082s-6.238 0-6.457-.082c-.267-.1-.53-.345-.665-.619-.097-.197-.098-.212-.098-1.299 0-1.065.003-1.105.09-1.269.195-.365.513-.62.856-.688.096-.019 2.964-.032 6.374-.029l6.2.006.226.111'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHorizontalAlignCenter);
export default ForwardRef;