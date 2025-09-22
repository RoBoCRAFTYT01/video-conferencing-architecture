# 🛡️ DR Procedures – Two-Node Cluster

This note explains the **Disaster Recovery (DR) / High Availability (HA)** setup for Huawei Collaboration systems when deployed in a **two-node cluster**.

---

## 📍 Site A (Local Redundancy)

- **SMC (Service Management Center)**
    - Active ↔ Standby pair.
    - If **Active SMC** goes down → **Standby SMC** takes over automatically.
- **SC (Session Control)**
    - Active ↔ Standby pair.
    - If **Active SC** goes down → **Standby SC** takes over automatically.
- **MCU (Multipoint Control Unit)**
    - Works as part of a **resource pool**.
    - If one MCU fails, others continue serving conferences → no strict A/S switchover.

✅ **Key Point**: Inside a single site, **failover is automatic** for SMC and SC. MCU is handled by pooling.

---

## 🌐 Site A <+> Site B (Geo-Redundancy)

When deploying across **two physical sites** (e.g., HQ + backup data center):

- **SMC (A / S)**
    - Switchover mode: **Manual**.
    - Reason: SMC is the “brain” of the system — automatic switchover across sites risks conflicts.
- **SC (Registration) (A / S)**
    - Switchover modes:
        1. **SMC-controlled** (via management interface).
        2. **Automatic**.
        3. **Manual**.
- **SC ( Proxy ) (A / A)**
- **MCU ( Pool )**

✅ **Key Point**: Across sites, **SMC = manual switchover**. **SC = flexible** (SMC / auto / manual).

---

## 🗂️ Summary Diagram

```
Site A
 ├─ SMC (Active ↔ Standby) [Auto]
 ├─ SC (Active ↔ Standby)  [Auto]
 └─ MCU Resource Pool

Site B
 ├─ SMC (Manual switchover only)
 └─ SC (SMC / Auto / Manual options)
```

# 📝 Notes

- **S = Standby**, **A = Active**.
- Local redundancy = automatic switchover.
- Geo-redundancy = manual or controlled switchover for safety.
- MCU redundancy = resource pooling, not A/S.