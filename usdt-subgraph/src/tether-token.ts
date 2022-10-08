import { BigInt } from "@graphprotocol/graph-ts"
import { Approval as ApprovalEvent, Transfer as TransferEvent } from "../generated/TetherToken/TetherToken"
import {UserAccount, Transaction} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
    
}

export function handleTransfer(event: TransferEvent): void { }
