import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWalletAddClose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 3.043a4.293 4.293 0 0 0-1.702.669c-.768.522-1.33 1.316-1.597 2.256-.1.351-.107.434-.124 1.462l-.018 1.09h2.222c2.41 0 2.51.007 3.06.227.465.185.808.415 1.186.793.696.696 1.02 1.477 1.02 2.46 0 .97-.323 1.758-1 2.441-.512.517-.942.766-1.671.968-.295.082-.408.087-2.563.101l-2.254.016.018 1.067c.017 1.007.024 1.088.126 1.445.423 1.494 1.58 2.572 3.09 2.879.394.08.523.083 4.163.083 4.125 0 3.956.01 4.26-.241.079-.065.186-.204.237-.309.088-.177.096-.254.12-1.13.031-1.087.086-1.383.37-1.983.232-.489.459-.818.801-1.16a4.263 4.263 0 0 1 1.865-1.062c.318-.083.452-.089 2.278-.111 1.93-.024 1.941-.024 2.13-.118.105-.051.244-.158.31-.238.253-.308.243-.127.231-4.392l-.012-3.876-.106-.385a4.037 4.037 0 0 0-1.604-2.283 5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028M2 12v2h2.098c1.377 0 2.171-.015 2.31-.044C7.31 13.768 8 12.92 8 12c0-.932-.71-1.791-1.617-1.957-.151-.027-.994-.043-2.31-.043H2v2m16.811 4.278a.883.883 0 0 0-.481.374c-.058.106-.072.255-.083.854l-.013.726-.73.014c-.721.014-.732.015-.899.126-.294.194-.413.501-.324.832.059.218.288.453.5.511.087.025.452.045.809.045h.65v.65c0 .358.02.722.045.809.059.213.293.441.513.5.4.108.812-.12.92-.51.023-.082.042-.441.042-.799v-.65h.65c.358 0 .722-.02.809-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832-.167-.111-.178-.112-.899-.126l-.73-.014-.013-.726c-.012-.645-.022-.741-.095-.865a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletAddClose);
export default ForwardRef;